# Example how to use TypeORM with TypeScript in the browser

1. clone repository 
2. run `pnpm i`
3. run `pnpm build`
4. run `pnpm start`
5. open site in the browser (`http://localhost:8080`)
6. open your web developer console and take a look what queries are executed and what data is persisted

# Screenshots

Logs from your console:

# known issue
nomatter what type you set, it'll always use sqljs 
[source code](https://github.com/typeorm/typeorm/blob/bbdc20f8cafc63e768f248213eafe65f163cb6e5/src/driver/sqlite/SqliteDriver.ts#L18)
so we can try install sqlite3 and remove sqljs
