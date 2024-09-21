import './rootLayout.css'

const rootLayout = ()=>{
    return (
        <div className='rootLayout'>
            <header>
                <Link to="/">
                <img src='/logo.png' alt="" />
                <span>LAMA AI</span>
                </Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default rootLayout;