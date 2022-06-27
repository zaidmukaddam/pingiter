# Pingiter - test your api's response times

Test your api endpoints to see how well they perform under multiple requests (pingiter your apis!), in sequence or parallel.

## Quick start

```bash
npx @pingiter/cli run --url "https://github.com"
```

Run `npx @pingiter/cli` to see all options or
head over to [@pingiter/cli docs](./packages/cli/README.md).

> Not a fan of npx? Get binaries for your favorite OS [here ⬇️ 💿](https://github.com/zaidmukaddam/pingiter/releases).
>
> Available for linux, macos and windows.

## What the cli can do

This package can stress-test your API endpoints in various ways so you can get a better idea on how your app would work under a (closer to) real world scenario.

Configure requests, set iterations and analyze response times of your API endpoints in a fashionable ascii chart or jaw-dropping table.

### Basic examples

#### Define iterations

```bash
npx @pingiter/cli run \
  --url "https://github.com" \     # or `-u <url>`
  --iterations 30                  # or `-i 30`
```

#### Send requests in parallel

```bash
npx @pingiter/cli run \
  --url "https://github.com" \     # or `-u <url>`
  --iterations 30 \                # or `-i 30`
  --parallel                       # or `-p`
```

#### Display a summary table

```bash
npx @pingiter/cli run \
  --url "https://github.com" \     # or `-u <url>`
  --iterations 30 \                # or `-i 30`
  --table "full"                   # or `-t "full"`
```

#### Display a minimal summary table

```bash
npx @pingiter/cli run \
  --url "https://github.com" \     # or `-u <url>`
  --iterations 30 \                # or `-i 30`
  --table "compact"                # or `-t "compact"`
```

#### Customize Request Method
`GET` is used as the default request method, but you can pass an optional request method, such as `POST`, `PUT`, `PATCH`, `DELETE` etc.

#### Send Headers
Arbitrary request headers are accepted as a JSON file.

> Tip 💡
>
> Passing { Cookie: "val" } adds a cookie to the request.

```json
// headers.json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.Et9HFtf9R3",
  "User-Agent": "Mozilla/5.0"
}
```

```bash
npx @pingiter/cli run \
  --url "https://github.com" \    # or `-u <url>`
  --iterations 20 \               # or `-i 30`
  --headerPath "headers.json"     # or `-h "headers.json"
```

#### Send Data
Arbitrary request data is accepted as a JSON file.

```json
// data.json
{
  "id": "17b",
  "user": {
    "firstName": "Jane",
    "lastName": "Doe"
  },
  "visits": 50
}
```

```bash
npx @pingiter/cli run \
  --url "https://github.com" \    # or `-u <url>`
  --iterations 20 \               # or `-i 30`
  --method "POST" \               # or `-m "POST"`
  --dataPath "data.json"          # or `-d "data.json"
```

#### Analyze failed request iterations
By default, details on failed iterations are neatly displayed via the table option.

```bash
npx @pingiter/cli run \
  --url "https://github.com" \    # or `-u <url>`
  --iterations 20 \               # or `-i 30`
  --method "POST" \                 # or `-m "POST"`
  --headerPath "headers.json" \   # or `-h "headers.json"
  --dataPath "data.json" \        # or `-d "data.json"
  --table "compact"               # or `-t "compact`
```
