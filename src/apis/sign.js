import axios from 'axios';

export const sign = async (email, password, name, phone_number, room_capacity, gender, nickname, birth) => {
  const config = {
    headers: {
      Authorization: 'token b675f2a94a95d73ab9319f2813ed4b26d8c2ed49',
      'Content-Type': 'application/json'
    }
  };

  try {
    const result = await axios.post('/api/user/create/', { // 프록시 경로 사용
      email,
      password,
      name,
      phone_number,
      room_capacity,
      gender,
      nickname,
      birth
    }, config);

    return result.data;
  } catch (error) {
    console.error('Network Error 발생:', error);

    if (error.response) {
      console.log('서버 응답 코드:', error.response.status);
      console.log('서버 응답 데이터:', error.response.data);
    } else if (error.request) {
      console.log('서버 응답 없음:', error.request);
    } else {
      console.log('설정 오류:', error.message);
    }

    alert('회원가입 요청 중 문제가 발생했습니다.');
    throw error;
  }
};
