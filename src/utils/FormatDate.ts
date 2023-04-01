
export function FormatDate(dateWeather: string) {
    const date = new Date(dateWeather);
    
    const options = {
      month: 'short',
      day: 'numeric',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date
    );

    return formattedDate;
  };