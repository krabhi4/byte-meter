import moment from 'moment-timezone';

export async function sendDataToSheet({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  console.log('called sendDataToSheet');
  const url = process.env.NEXT_PUBLIC_WEB_APP_URL ?? '';

  const requestData = {
    name: name,
    email: email,
    message: message,
    time: moment().tz('America/Chicago').format('YYYY-MM-DDTHH:mm:ss'),
  };

  await Promise.resolve(
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(requestData),
    })
      .then((data) => {
        return { title: 'Success', error: null, data: data };
      })
      .catch((error) => {
        console.log('Error: ', error);
        return { title: 'Error', error: error as Error, data: null };
      })
  );
}
