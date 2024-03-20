import {gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
  query GetBooks {
    books {
        name
        id
    }
}`;

const getAuthorsQuery = gql`
  query getAuthors {
    authors {
        name
        id
    }
}`;

function Authors() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    // Show error on screen if error loading books
    if (error) return <p>Error Loading Books: {error.message}</p>;
    // Since async, if loading display to user still loading if not render data
    if (loading) {
        return <option disabled>Loading Authors..</option>;
    } else {
        return data.authors.map(author => {
            return (
                <option key={author.id} value={author.id}>{author.name}</option>
            )
        });
    } 
}

function Books() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (error) return <p>Error Loading Books: {error.message}</p>;
                // Since async, if loading display to user still loading if not render data
                if (loading) {
                    return <p>Loading Books...</p>;
                } else {
                    return data.books.map(book => {
                        return (
                            <div>
                                <ul>
                                    <li key={book.id}>{book.name}</li>
                                </ul>
                                <br />
                            </div>
                        )
                    });
                }
}

export {Authors, Books }