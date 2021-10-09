import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
<<<<<<< Updated upstream
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

import NoteForm from '../components/NoteForm';

const NEW_NOTE = gql`
  mutation newNote($content: String!) {
    newNote(content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;
=======
>>>>>>> Stashed changes

const NewNote = props => {
  useEffect(() => {
    document.title = 'New Note - Notedly';
  });

<<<<<<< Updated upstream
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: data => {
      props.history.push('note/${data.newNote.id');
      
    }
  });

  return;
  <React.Fragment>
    {loading && <p>Loading...</p>}
    {error && <p>Error saving the note</p>}
    <NoteForm action={data} />;
  </React.Fragment>;
=======
  return <div>New Note</div>;
>>>>>>> Stashed changes
};

export default NewNote;
