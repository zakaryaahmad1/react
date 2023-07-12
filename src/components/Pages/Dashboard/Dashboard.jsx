import './css/dashboard.css'
import { MdDashboard } from 'react-icons/md';
import Logo from '../../Image/Logo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserAuth } from '../../Action/userRegister';
import { Link} from 'react-router-dom'
const Dashboard = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector(state => state.getUser);
  const { users } = getUsers;
  

  useEffect(() => {
    dispatch(getUserAuth());
  }, [])

  return (
    <div className='px-3 xl:px-6 md:px-3 mt-10'>

      <div className='pb-3 flex justify-between items-center'>
        <div className='flex items-center gap-3 md:text-lg xl:text-3xl'>
          <div ><MdDashboard /></div>
          <p>Dashboard  </p>
        </div>
        <div className='font-bold'>
          <p>Welcome : {users.fullname} </p>
        </div>
      </div>


      <div className='containerDash '>
        {
          users.location_id == "2" ?
            <Link to={users.section_id ==5 ? '/invoice':''} className='childDash  w-full '>
              {/* content */}

              <div className='contentDash'>


                <div className='text-white text-xl'>
                  Sulaimany
                  <br />
                  <p>Branch</p>
                </div>
                <div>
                  <img className='w-16 brightness-100' src={Logo} />
                </div>

              </div>


              {/* end Content */}
            </Link> : users.location_id == "3" ?
              <Link to={'Raparin'} className='childDash1'>
                {/* content */}
                <div className='contentDash'>

                  <div className='text-white text-xl'>
                    Raparin
                    <br />
                    <p>Branch</p>
                  </div>
                  <div>
                    <img className='w-16 brightness-100' src={Logo} />
                  </div>


                </div>
                {/* end Content */}
              </Link> : users.location_id == "4" ?
                <Link to={'invoice'} className='childDash2'>
                  {/* content */}
                  <div className='contentDash'>

                    <div className='text-white text-xl'>
                      Garmyan
                      <br />
                      <p>Branch</p>
                    </div>
                    <div>
                      <img className='w-16 brightness-100' src={Logo} />
                    </div>


                  </div>

                  {/* end Content */}
                </Link>
                : users.location_id == '5' ?
                  <div className='childDash'>
                    {/* content */}
                    <div className='contentDash'>

                      <div className='text-white text-xl'>
                        Erbil
                        <br />
                        <p>Branch</p>
                      </div>
                      <div>
                        <img className='w-16 brightness-100' src={Logo} />
                      </div>


                    </div>
                    {/* end Content */}
                  </div> : users.location_id == '5' ?
                    <div className='childDash1'>
                      {/* content */}
                      <div className='contentDash'>

                        <div className='text-white text-xl'>
                          Karkuk
                          <br />
                          <p>Branch</p>
                        </div>
                        <div>
                          <img className='w-16 brightness-100' src={Logo} />
                        </div>


                      </div>
                      {/* end Content */}
                    </div>/* end childDash */
                    : users.location_id == '7' ?

                      <div className='childDash2'>
                        {/* content */}
                        <div className='contentDash'>

                          <div className='text-white text-xl'>
                            Halabja
                            <br />
                            <p>Branch</p>
                          </div>
                          <div>
                            <img className='w-16 brightness-100' src={Logo} />
                          </div>

                        </div>
                        {/* end Content */}
                      </div>
                      /* end childDash */
                      : ''
        }






      </div>
    </div>
  )
}

export default Dashboard