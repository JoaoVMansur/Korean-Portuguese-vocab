import axios from "axios";


export const deleteCard = async (cardId: number) => {
  const response = await axios.delete(`http://localhost:8080/card/${cardId}`, {withCredentials:true});
  return response.data;
};

    