# k6-load-testing-ci

Сервис для хранения скриптов нагрузочного тестирования по различным проектам.

Название папки для скриптов НТ называть в соответствии с именем сервиса

### Официальная документация:

Главная страница - https://k6.io/docs/

### Ниже будут перечислены полезные разделы, которые будут полезны, и их не надо будет искать самим

Жизненный цикл тестов - https://k6.io/docs/using-k6/test-lifecycle/  

Примеры реализации от k6:   
https://k6.io/docs/examples/,  
https://github.com/grafana/k6-learn,  
https://github.com/grafana/k6-learn/tree/main/Modules      

8 базовых задач для погружение в k6 - https://k6.io/blog/learning-js-through-load-testing/    

Интеграции на вывод метрик в реальном времени - https://k6.io/docs/results-output/real-time/     

k6 http - https://k6.io/docs/javascript-api/k6-http/     

Интеграции - https://k6.io/docs/integrations/     

Расширения (Extensions) - https://k6.io/docs/extensions/   

Исполнители (Executors) - https://k6.io/docs/using-k6/scenarios/executors/


# Примеры запусков нагрузочного тестирования

## Перед запуском нужно поднять сервисы из docker-compose файла и установить k6 с официального [сайта](https://k6.io/docs/get-started/installation/) 
```bash
docker-compose -f local/docker-compose.yml up -d 
```

### Запуск НТ - put запрос [редактирование пользователя]
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/simple-tests/put-request-test.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл  

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1  loadtests/example/simple-tests/put-request-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1  loadtests/example/simple-tests/put-request-test.js
```
</details>

### Запуск НТ - post запрос [создание пользователя]
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/simple-tests/post-request-test.js
```

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/post-request-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/post-request-test.js
```
</details>

### Запуск НТ - get запрос [получение пользователя]
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/simple-tests/get-request-test.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/get-request-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/get-request-test.js
```
</details>

### Запуск НТ - delete запрос [удаление пользователя]
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/simple-tests/del-request-test.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/del-request-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/del-request-test.js
```
</details>

### Запуск НТ - get запрос c query параметрами
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/simple-tests/query-params/get-request-with-query-params-test.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/query-params/get-request-with-query-params-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/query-params/get-request-with-query-params-test.js
```
</details>

### Запуск НТ - get запрос c path параметрами
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/simple-tests/path-params/get-request-with-path-params-test.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/path-params/get-request-with-path-params-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/simple-tests/path-params/get-request-with-path-params-test.js
```
</details>

### Запуск НТ - пример тестирования сценария: создание пользователя -> редактирование пользователя -> удаление пользователя
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/scenario-tests/miltistep-api-test.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/scenario-tests/miltistep-api-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/scenario-tests/miltistep-api-test.js
```
</details>

### Запуск НТ - get запрос с динамической передачей параметров. Реализация через array
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/dynamic-data-in-tests/get-request-with-path-params-test-and-dynamic-data-array.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/dynamic-data-in-tests/get-request-with-path-params-test-and-dynamic-data-array.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/dynamic-data-in-tests/get-request-with-path-params-test-and-dynamic-data-array.js
```
</details>

### Запуск НТ - get запрос с динамической передачей параметров. Реализация через json
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
```bash
k6 run loadtests/example/dynamic-data-in-tests/get-request-with-path-params-test-and-dynamic-data-json.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/dynamic-data-in-tests/get-request-with-path-params-test-and-dynamic-data-json.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw --tag testid=test1 loadtests/example/dynamic-data-in-tests/get-request-with-path-params-test-and-dynamic-data-json.js
```
</details>

### Запуск НТ - get запрос c передачей параметра через ENV-у
<details><summary>Примеры запуска</summary>

#### Запуск НТ без вывода метрик в Grafana
#### MacOs
```bash
k6 run -e MY_HOSTNAME=localhost:8080 loadtests/example/simple-tests/with-env-vars/get-request-with-env-simple-test.js
```
#### Windows
```bash
k6 run -e "MY_HOSTNAME=localhost:8080" loadtests/example/simple-tests/with-env-vars/get-request-with-env-simple-test.js
```

#### Запуск НТ c метриками в Grafana [редактирование пользователя]

Для запуска скрипта перейти в консоли в папку, где лежит нужный файл

Windows
```
set "K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true" && set "K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write" && k6 run -o experimental-prometheus-rw -e MY_HOSTNAME=localhost:8080 --tag testid=test1 loadtests/example/simple-tests/with-env-vars/get-request-with-env-simple-test.js
```
macOS
```
K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true K6_PROMETHEUS_RW_SERVER_URL=http://127.0.0.1:9090/api/v1/write k6 run -o experimental-prometheus-rw -e "MY_HOSTNAME=localhost:8080" --tag testid=test1 loadtests/example/simple-tests/with-env-vars/get-request-with-env-simple-test.js
```
</details>
