import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ACCUWEATHER_API_KEY = 'CCIDwHXyAlYT3vqtUGpc6POCww6teav2';
const BASE_URL = 'http://dataservice.accuweather.com';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL }),
    tagTypes: ['Weather', 'Forecast'],
    endpoints: (builder) => ({
        getLocationByGeoPosition: builder.query({
            query: ({ latitude, longitude }) => `/locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_API_KEY}&q=${latitude},${longitude}`,
            providesTags: [{type: 'Weather', id: "LIST"}]
        }),
        getDailyForecasts: builder.query({
            query: ({ locationId }) => `/forecasts/v1/daily/5day/${locationId}?apikey=${ACCUWEATHER_API_KEY}&details=true&metric=true`,
            providesTags: [{type: 'Forecast', id: "LIST"}]
        }),
    })
})