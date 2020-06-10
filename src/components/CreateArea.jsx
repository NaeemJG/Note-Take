import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = props => {
  const [zoom, setZoom] = useState(false)
  const setTheZoom = () => {
    return setZoom(true)
  }
 
  return (
    <div>
      <form className="create-note" onSubmit={props.submit}>
        <input name="title" placeholder="Title" onChange={props.handleChange} value={props.title} onClick={setTheZoom}/>
        {zoom && <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange} value={props.content}/>}
        <Zoom in={zoom}>
          <Fab type="submit"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
