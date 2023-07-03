import { g, auth, config } from '@grafbase/sdk'


const User = g.model('user', {
  name: g.string().length({ min: 2, max: 25 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects:g.relation(()=>Projects).list()
})

const Projects = g.model('Projects', {
  name: g.string().length({ min: 2 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl:g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy:g.relation(()=>User)
})




export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
