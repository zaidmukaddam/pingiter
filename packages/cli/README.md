## @pingiter/cli

[![@pingiter/cli on npm](https://img.shields.io/npm/v/@pingiter/cli?label=npm&style=flat)](https://www.npmjs.com/package/@pingiter/cli)

Use this cli tool to test your api endpoints to see how well they perform under multiple requests in sequence or parallel.

### Basic usage

```bash
npx @pingiter/cli run --url "https://github.com"
```

[👉 See how to get started and examples here](https://github.com/zaidmukaddam/pingiter/blob/master/README.md)


### Options

```
Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  run [options]   Test an api endpoint/url (<url>), Valid urls begin with http(s)://
  help [command]  display help for command
```

### `@pingiter/cli run`

```
Usage: pingiter run [options]

Test an api endpoint/url (<url>), Valid urls begin with http(s)://

Options:
  -u, --url <url>                  url to test
  -m, --method <method>            request method (verb) to use (default: "get")
  -i, --iterations <iterations>    number of requests to perform (default: "10")
  -h, --headersPath <headersPath>  path to headers file (json), to add as request headers.
  -d, --dataPath <dataPath>        path to data file (json), to add as request body.
  -p, --parallel                   run requests in parallel (default: false)
  -c, --chart                      display results as chart (default: true)
  -t, --table <table>              display results as table (none, compact, full) (default:
                                   "none")
  --help                           display help for command
```
