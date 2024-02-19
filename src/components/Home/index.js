import BlogsList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
      <BlogsList />
    </div>
  </div>
)

export default Home
