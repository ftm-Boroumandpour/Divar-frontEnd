/* eslint-disable react/prop-types */



import styles from './Sidebar.module.css'


function Sidebar({categories ,categoryHandler }) {

  return (
    <div className={styles.sidebar}>
        <h4>دسته ها</h4>
        <ul onClick={categoryHandler}>
             <li  id="allPosts"><p>همه آگهی ها</p></li>
            {categories?.data.map(category=>(
                <li key={category._id} id={category._id}>
                    <img src={`${category.icon}.svg`} />
                    <p>{category.name}</p>
                    
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar