import http from 'k6/http';

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

export default function (data) {
    const requestParams = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    let requestBodyForCreateUser = {
        "name": "Тестовый юзер",
        "age": 100
    }

    let requestBodyForUpdateUser = {
        "name": "Тестовый юзер отредактирован",
        "age": 120
    }

    //Создание пользователя
    console.log('Создаём пользователя')
    const user = JSON.parse(http.post('http://localhost:8080/users', JSON.stringify(requestBodyForCreateUser), requestParams).body);
    const userUuid = user.uuid;
    console.log('uuid пользователя = ' + userUuid)
    //Редактирование пользователя
    console.log('Редактируем пользователя')
    http.put('http://localhost:8080/users/' + userUuid, JSON.stringify(requestBodyForUpdateUser), requestParams);

    //Удаление пользователя
    console.log('Удаляем пользователя')
    http.del(`http://localhost:8080/users/` + userUuid, null, requestParams);
}
