
const DisplayPosts = (props) => {
    return (
        
        
        <tbody>
          {props.parentEntries.map((entry)=>{
            return (
                <tr>
                    <td>{entry.name}</td>
                    <td>{entry.post}</td>
                </tr>
                )
            })}  
        </tbody>
        
      );
}
 
export default DisplayPosts;