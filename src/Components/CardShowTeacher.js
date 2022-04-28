import './Components_Styles/CardShowTeacher.css'

const CardShowTeacher = (props)=>{
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
        {props.getTeacher.map((items, key)=>{
            return(
                <tbody key={key}>
                <tr>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.phone_no}</td>
                </tr>
            </tbody>
            )
        })
        }

        </table>
    )
}
export default CardShowTeacher