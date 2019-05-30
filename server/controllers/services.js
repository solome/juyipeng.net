exports.default = [
  {
    urls: ['/services/extrude-walls', 'ke/:work_id/:hashid_params'],
    controller: async function (ctx) {
      await ctx.njkrender('services.njk', {
        page: 'services/extrude-walls',
        name: 'ExtrudeWalls',
        state: {
          
        },
      })
    }
  },
]

