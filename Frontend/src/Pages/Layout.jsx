import { Button, Typography } from '@mui/material'
import '../Styles/layout.css'

const Layout = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className="info">
            <Typography variant='h1'>
              Lunaca S.A
            </Typography>
          </div>
          <div className="background">            <img
            src="https://www.vascongada.com/wp-content/uploads/2020/04/transport-4916922_1280.jpg"
            alt="Background"
            style={{ width: '100%' }}
          />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
