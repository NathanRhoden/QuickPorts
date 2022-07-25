import postCodeConversion from '../locationservice/PostCodeConversion';

describe("PostCode conversion", () => {
    test('Converting the postcode EC2R8HL should return latitude": 51.514422 longitude": -0.089849 ' , () => {
        expect(postCodeConversion('EC2R8HL')).toBe('51.514422');
    })

})