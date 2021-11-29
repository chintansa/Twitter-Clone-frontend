const PROFILE_API = 'https://web-dev-node21.herokuapp.com/api/profile';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-profile',
                profile
            })
        );

export const saveProfileData = (dispatch, profile) => {
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
      
        .then(response => response.json())
        .then(profile => 
            dispatch({
                type : 'fetch-profile',
                profile
            }));
        }

      
