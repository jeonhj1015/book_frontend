import { useEffect, useState } from "react";
import axios from "axios";
const BookList = () => {
  const [list, setlist] = useState([]);
  // 도서 목록을 가져오는 함수
  const fetchBooks = async () => {
    const url = "http://54.84.50.220:8080/api/books";
    const result = await axios.get(url);
    setlist(result.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  let tr_list = list.map((book) => {
    return (
      <>
        <tr>
          <td>{book.no}</td>
          <td>{book.title}</td>
          <td>{book.price}</td>
          <td>{book.qty}</td>
          <td>{book.publisher}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h2>도서 목록</h2>
      <hr />
      <table>
        <thead>
          <tr>
            <th>도서번호</th>
            <th>도서이름</th>
            <th>도서가격</th>
            <th>도서재고</th>
            <th>출판사명</th>
          </tr>
        </thead>
        <tbody>{tr_list}</tbody>
      </table>
    </>
  );
};

export default BookList;
