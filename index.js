const prod = process.NODE_ENV === 'production'

if (prod) require('./server/main')
else require('./server/main.localhost')

