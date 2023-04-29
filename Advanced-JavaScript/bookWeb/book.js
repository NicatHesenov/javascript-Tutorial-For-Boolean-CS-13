const BASE_URL = "https://gutendex.com/books/";

// const cardBody = document.getElementById("cardBody");

const header = document.getElementById("header");

const booksCardBody = document.getElementById("dailyCard");

const getBooks = async function () {
  try {
    const request = await fetch(
      `${BASE_URL}?ids=11,12,13,2600,4300,1184,205,36,1717,30254,14,15,20,25,30`
    );
    const response = await request.json();

    const { results } = response;
    return results;
  } catch (error) {
    throw Error(error.message);
  }
};
getBooks()
  .then((results) => displayBooks(...results))
  .catch((errorMessage) => console.error(errorMessage));

const displayBooks = function (...results) {
  results.forEach((results) => {
    console.log(results);
    let { formats, title, authors } = results;
    let newsHtml = `<div class="books--card">
                        <div class="card--head">
                            <img class=" book-img"src="${
                              formats["image/jpeg"]
                            }" alt="">
                        </div>
                        <div class="card--body" id="cardBody">
                            <h4>
                                ${title}
                            </h4>
                            <p>
                                
                            </p>
                            </div>
                        <div class="card--author">
                            ${authors.map((author) => author.name).join(", ")}
                        </div>
                    </div>`;
    booksCardBody.insertAdjacentHTML("beforeend", newsHtml);
  });
};
