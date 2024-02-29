const { BASE_URL } = require("./baseUrl");
const { commonApi } = require("./commonApi");

// register
export const registerApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/signalusers/register`,body,"")
}

// login
export const loginApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/signalusers/login`,body,"")
}

// update profile
export const updateProfile=async(body,headers,id)=>{
    console.log(body, headers, id);

    return await commonApi('POST',`${BASE_URL}/signalusers/update-profile/${id}`,body,headers)
}

// // get profile to view on profile
// export const getProfileApi=async(id)=>{
//     return await commonApi('GET',`${BASE_URL}/signalusers/getprofile/${id}`,{},"")
// }

// add new posts
export const addPostApi=async(body,headers)=>{
    return await commonApi('POST',`${BASE_URL}/signalusers/add-post`,body,headers)
}

// add user posts
export const userPostApi=async(headers,id)=>{
    return await commonApi('GET',`${BASE_URL}/signalusers/get-signalusers-posts/${id}`,"",headers)
}

// add all posts
export const allPostApi=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/signalusers/get-all-posts/${id}`,"","")
}

// delete post
export const deletePostApi=async(header,id)=>{
    return await commonApi('DELETE',`${BASE_URL}/signalusers/delete-project/${id}`,{},header)
}

// likeCount
export const likeCountApi=async(body,headers,id)=>{
    return await commonApi('PUT',`${BASE_URL}/signalusers/likeCount/${id}`,body,headers)
}

// getUnameApi
export const getUnameApi=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/signalusers/get-signalusers-uname/${id}`,"","")
}
