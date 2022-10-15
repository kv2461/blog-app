import React from 'react'
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src=''alt=''/>
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>User</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}><img src={Edit} alt="" /></Link>
            
            <img src={Delete} alt='' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo est suscipit iusto esse nam tenetur qui consectetur, fugiat eos blanditiis provident in repellat quaerat autem numquam eum dolores ex nesciunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa voluptatum assumenda nam tempore, dolores, sapiente, perspiciatis possimus ipsa ut labore iste odio perferendis quis eum consequuntur facilis eligendi quae nesciunt quia iusto nobis molestias distinctio. Dolore optio laudantium aliquam.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single