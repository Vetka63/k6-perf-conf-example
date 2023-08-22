import http from 'k6/http';
import {sleep} from 'k6';

let count = 0;

function createUsers() {
    let requestBody = {
        "name": "Тестовый юзер",
        "age": 100
    }

    const postParams = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const userUuids = [];

    for (let i = 0; i < 200; i++) {
        const body = JSON.parse(http.post('http://localhost:8080/users/', JSON.stringify(requestBody), postParams).body);
        console.log('Создали пользователя. Параметры ниже')
        console.log(body)
        sleep(0.1)
        userUuids.push(body.uuid)
    }
    return userUuids
}

export const options = {

    thresholds: {
        http_req_failed: [{threshold: 'rate<0.1', abortOnFail: true}],
        http_req_duration: [{threshold: 'p(95)<250', abortOnFail: true}],
    },

    insecureSkipTLSVerify: true,

    scenarios: {
        contacts: {
            executor: 'ramping-arrival-rate',
            startRate: 5,
            timeUnit: '1s',
            preAllocatedVUs: 1,

            maxVUs: 10,

            stages: [
                //разгон с 0 rps до 5 за 5 секунд
                {target: 5, duration: '5s'},
                //держим нагрузку в 5 rps 30 секунд
                {target: 5, duration: '30s'}
            ],
        },
    },
};

// ВАЖНО!!! Максимальное время инициализации setup() равно 4 минуты по дефолту
export function setup() {
    return {
        userUuids: createUsers()
    };
}

// ВАЖНО!!! Глобальные переменные K6 работает только в рамках одного из этапов жизненного цикла. Нельзя пошарить глобальную переменную между setup() и исполняемой функцией для НТ
export default function (data) {
    console.log(count)

    const postParams = {
        headers: {},
    };

    console.log('uuid = ' + data.userUuids[count])
    http.del(`http://localhost:8080/users/` + data.userUuids[count], null, postParams);

    count = count + 1;
    console.log(count)
}
