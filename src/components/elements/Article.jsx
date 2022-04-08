import {useState} from "react";

const Article = (props) => {
  const [isPublish, setIsPublish] = useState(false);
  console.log(isPublish);

  return (
		<div>
			<h1>{props.title}</h1> 
			<p>{props.content}</p>
      <button onClick={() => setIsPublish(true)}>公開</button>
		</div>
	);
};

export default Article;
