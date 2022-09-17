const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fZEB2tpIC45iiUMRjYli/comments?item_id=52977';

const commentsJSON = [
  {
    comment: 'I love it!',
    username: 'ZikaZaki',
    creation_date: '2022-09-17',
  },
  {
    creation_date: '2022-09-17',
    comment: 'zx',
    username: 'zx',
  },
  {
    username: 'asd',
    comment: 'asddd',
    creation_date: '2022-09-17',
  },
  {
    creation_date: '2022-09-17',
    comment: 'Tastey. I need more.',
    username: 'Wdhah',
  },
  {
    username: 'Ali',
    creation_date: '2022-09-17',
    comment: 'Nice. Looks delicious.',
  },
  {
    creation_date: '2022-09-17',
    username: 'Abdullah',
    comment: 'My mother cooks it for me everyday.',
  },
  {
    username: 'Tester',
    comment: "Don't like so much.",
    creation_date: '2022-09-17',
  },
  {
    username: 'Tester2',
    creation_date: '2022-09-17',
    comment: 'Not this one.',
  },
  {
    creation_date: '2022-09-17',
    comment: 'asdsad',
    username: 'sadaa',
  },
  {
    username: 'Geto',
    comment: 'Hi, this is an Ethiopian meal.',
    creation_date: '2022-09-17',
  },
  {
    creation_date: '2022-09-17',
    username: 'Omar',
    comment: 'I have plenty of it today.',
  },
];

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve(commentsJSON),
});

describe('Test-Cases: Comments Counter', () => {
  test('- Number of Comments Should Be: 11', async () => {
    const fetchedComments = await fetch(baseURL);
    const comments = await fetchedComments.json();
    expect(comments.length).toBe(11);
  });
});