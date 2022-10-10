import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='admin-sidebar'>
            <div className='top'>
                <span className='logo'>UNI L<span className=' logo green'>O</span>G<span className='logo green'>O</span></span>
                <span className='role'>Administrator</span>
            </div>

            <div className='center'>
                <ul>
                    <li><span>INSTRUCTORS</span></li>
                    <li><span>INSTRUCTORS</span></li>
                    <li><span>INSTRUCTORS</span></li>
                </ul>
            </div>

            <div className='bottom'>logout</div>
        </div>
    )
}

export default Sidebar