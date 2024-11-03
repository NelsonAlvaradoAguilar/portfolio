import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './BookMeeting.scss'
const BookMeeting = () => {
  const [meetingDateTime, setMeetingDateTime] = useState(new Date());

  const handleSubmit = (e) => {

    e.preventDefault();
    try {
        alert(`Meeting booked on ${meetingDateTime}`);
     
    } catch (error) {
        alert(`failed to booked on ${meetingDateTime}`);
    }
  
   
    window.location.reload(meetingDateTime); 
  };
/**  if (new Date() > meetingDateTime) {
    alert(`failed to booked on ${meetingDateTime}`);
} */
function handleOnchage(params) {
    
}
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__container'>
        <label htmlFor="datetime">Select Meeting Date and Time:</label>
        <DateTimePicker
          id="datetime"
          onChange={setMeetingDateTime}
          value={meetingDateTime}
          required
        />
      </div>
      <button type="submit">Book Meeting</button>
    </form>
  );
};

export default BookMeeting;