async function upvoteClickHandler(event) {
  event.preventDefault();

  console.log('window.location', window.location);

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log('window.location', window.location);

  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.upvote-btn')
  .addEventListener('click', upvoteClickHandler);
