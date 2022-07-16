import { useParams } from "react-router-dom";
export default function Movies() {
  let { id } = useParams();
  return <h1>Some movies are here with id:{id}</h1>;
}
