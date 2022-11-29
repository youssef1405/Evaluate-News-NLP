import { postData } from '../src/client/js/sendDataToServer';

describe('testing the postData function', () => {
  test('correct data returned by the API', () => {
    const testObj = {
      Score_tag: 'P',
      Agreement: 'DISAGREEMENT',
      Subjectivity: 'SUBJECTIVE',
      Confidence: 86,
      Irony: 'NONIRONIC',
    };

    const url = 'http://localhost:3000/article';
    const formUrl =
      'https://www.cnn.com/2022/11/28/sport/deshaun-watson-cleveland-browns-return-spt-intl/index.html';

    return postData(url, formUrl).then((data) => {
      data = {
        Score_tag: data.score_tag,
        Agreement: data.agreement,
        Subjectivity: data.subjectivity,
        Confidence: data.confidence,
        Irony: data.irony,
      };
      expect(data).toEqual(testObj);
    });
  });
});
