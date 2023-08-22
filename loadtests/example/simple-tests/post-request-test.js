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
    let requestBody = {
        "name": "Тестовый юзер",
        "age": 100
    }

    const postParams = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = http.post('http://localhost:8080/users', JSON.stringify(requestBody), postParams);

    console.log(response.body)
}
