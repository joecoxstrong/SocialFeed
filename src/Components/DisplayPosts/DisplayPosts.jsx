
const DisplayPosts = (props) => {
    return (
        
        
        
          
                <div class="media-body">
                    {props.parentEntries.map((entry)=>{
                        return (
                    <><h4 class="media-heading">{entry.name}</h4><div>{entry.post}</div></>
                
                // <tr>
                //     <td>{entry.name}</td>
                //     <td>{entry.post}</td>
                // </tr>
                )
                })}  
                </div>
        
      );
}
 
export default DisplayPosts;


