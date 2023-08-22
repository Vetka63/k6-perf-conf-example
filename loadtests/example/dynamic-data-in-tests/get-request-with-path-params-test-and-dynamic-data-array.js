import http from 'k6/http';

//создаём массив с данными, из которого рандомно будет брать значение
let values = ['1', '2', '3', '4', '5', '6', '7'];
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

export default function () {
    let randomIndex = Math.floor(Math.random() * values.length);
    console.log('value: ' + values[randomIndex]);

    const response = http.get('http://localhost:8080/' + values[randomIndex]);

    console.log('result: ' + response.body);
}
