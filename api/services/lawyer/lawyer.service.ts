import pool  from "../../../db";

export const getAllLawyers = async () => {
  const query = `
    SELECT * 
    FROM lawyer_list
    ORDER BY full_name ASC;
  `;

  const result = await pool.query(query);
  return result.rows;
};


export const getLawyerById= async (id: string)=>{
  const result = await pool.query(`SELECT * FROM lawyer_list WHERE id = $1`,[id])
 return result.rows[0];
}

// export const createLawyer = async(payload: any)=>{
  
//     const { title, description, excerpt, author, category, image } = payload;
//     const result = await pool.query(
//     `INSERT INTO lawyer_list (title, description, excerpt, author, category, image)
//      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
//     [title, description, excerpt, author, category, image]
//   );
//   return result.rows[0];

// }

// export const createLawyer = async (payload: any) => {
//   const {
//     auth_id,
//     username,
//     first_name,
//     last_name,
//     full_name,
//     email,
//     phone,
//     rating,
//     location,
//     address,
//     pin_code,
//     certification,
//     qualification,
//     experience,
//     bar_councle_no,
//     bar_asso_name,
//     category,
//     specilization,
//     pricing,
//     duration,
//     bio,
//     languages,
//     feedback,
//   } = payload;

//   const query = `
//     INSERT INTO lawyer_list (
//       auth_id,
//       username,
//       first_name,
//       last_name,
//       full_name,
//       email,
//       phone,
//       rating,
//       location,
//       address,
//       pin_code,
//       certification,
//       qualification,
//       experience,
//       bar_councle_no,
//       bar_asso_name,
//       category,
//       specilization,
//       pricing,
//       duration,
//       bio,
//       languages,
//       feedback
//     ) 
//     VALUES (
//       $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
//       $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
//       $21, $22, $23
//     )
//     RETURNING *;
//   `;

//   const values = [
//     auth_id,
//     username,
//     first_name,
//     last_name,
//     full_name,
//     email,
//     phone,
//     rating,
//     location,
//     address,
//     pin_code,
//     certification,
//     qualification,
//     experience,
//     bar_councle_no,
//     bar_asso_name,
//     category,
//     specilization,
//     pricing,
//     duration,
//     bio,
//     languages, // should be an array like ['English', 'Hindi']
//     feedback,
//   ];

//   const result = await pool.query(query, values);
//   return result.rows[0];
// };

export const createLawyer = async (payload: any) => {
  const {
    auth_id,
    username,
    first_name,
    last_name,
    full_name,
    email,
    phone,
    rating,
    location,
    address,
    pin_code,
    certification,
    qualification,
    experience,
    bar_councle_no,
    bar_asso_name,
    pricing,
    duration,
    bio,
    languages,
    feedback,
    category,
    specilization,
    image,
    reviews,
    achievements,
    practiceareas,
    education,
    caseswon,
    totalcases,
    availability,
    successrate,
    review_users
  } = payload;

  const query = `
    INSERT INTO lawyer_list (
      auth_id,
      username,
      first_name,
      last_name,
      full_name,
      email,
      phone,
      rating,
      location,
      address,
      pin_code,
      certification,
      qualification,
      experience,
      bar_councle_no,
      bar_asso_name,
      pricing,
      duration,
      bio,
      languages,
      feedback,
      category,
      specilization,
      image,
      reviews,
      achievements,
      practiceareas,
      education,
      caseswon,
      totalcases,
      availability,
      successrate,
      review_users
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
      $31, $32, $33
    )
    RETURNING *;
  `;

  const values = [
    auth_id,
    username,
    first_name,
    last_name,
    full_name,
    email,
    phone,
    rating,
    location,
    address,
    pin_code,
    certification,
    qualification,
    experience,
    bar_councle_no,
    bar_asso_name,
    pricing,
    duration,
    bio,
    languages,
    feedback,
    category,
    specilization,
    image,
    reviews,
    achievements,
    practiceareas,
    education,
    caseswon,
    totalcases,
    availability,
    successrate,
    review_users
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};






// export const updatedLawyer = async(id:number, blogData: any)=>{
//     const { title, description, excerpt, author, category, image } = blogData;
//     const result = await pool.query(`UPDATE lawyer_list SET title = $1, description = $2, excerpt = $3, author = $4, category = $5, image = $6 WHERE id = $7`,[title, description, excerpt, author, category, image, id])
//     return (result.rowCount ?? 0) > 0;
// }

// export const updatedLawyer = async (id: string, lawyerData: any) => {
//   const {
//     auth_id,
//     username,
//     first_name,
//     last_name,
//     full_name,
//     email,
//     phone,
//     rating,
//     location,
//     address,
//     pin_code,
//     certification,
//     qualification,
//     experience,
//     bar_councle_no,
//     bar_asso_name,
//     category,
//     specilization,
//     pricing,
//     duration,
//     bio,
//     languages,
//     feedback,
//   } = lawyerData;

//   const query = `
//     UPDATE lawyer_list SET
//       auth_id = $1,
//       username = $2,
//       first_name = $3,
//       last_name = $4,
//       full_name = $5,
//       email = $6,
//       phone = $7,
//       rating = $8,
//       location = $9,
//       address = $10,
//       pin_code = $11,
//       certification = $12,
//       qualification = $13,
//       experience = $14,
//       bar_councle_no = $15,
//       bar_asso_name = $16,
//       category = $17,
//       specilization = $18,
//       pricing = $19,
//       duration = $20,
//       bio = $21,
//       languages = $22,
//       feedback = $23
//     WHERE id = $24
//     RETURNING *;
//   `;

//   const values = [
//     auth_id,
//     username,
//     first_name,
//     last_name,
//     full_name,
//     email,
//     phone,
//     rating,
//     location,
//     address,
//     pin_code,
//     certification,
//     qualification,
//     experience,
//     bar_councle_no,
//     bar_asso_name,
//     category,
//     specilization,
//     pricing,
//     duration,
//     bio,
//     languages,
//     feedback,
//     id,
//   ];

//   const result = await pool.query(query, values);
//   return result.rows[0] || null; // Return updated row or null if not found
// };
export const updatedLawyer = async (id: string, lawyerData: any) => {
  const {
    auth_id,
    username,
    first_name,
    last_name,
    full_name,
    email,
    phone,
    rating,
    location,
    address,
    pin_code,
    certification,
    qualification,
    experience,
    bar_councle_no,
    bar_asso_name,
    pricing,
    duration,
    bio,
    languages,
    feedback,
    category,
    specilization,
    image,
    reviews,
    achievements,
    practiceareas,
    education,
    caseswon,
    totalcases,
    availability,
    successrate,
    review_users
  } = lawyerData;

  const query = `
    UPDATE lawyer_list SET
      auth_id = $1,
      username = $2,
      first_name = $3,
      last_name = $4,
      full_name = $5,
      email = $6,
      phone = $7,
      rating = $8,
      location = $9,
      address = $10,
      pin_code = $11,
      certification = $12,
      qualification = $13,
      experience = $14,
      bar_councle_no = $15,
      bar_asso_name = $16,
      pricing = $17,
      duration = $18,
      bio = $19,
      languages = $20,
      feedback = $21,
      category = $22,
      specilization = $23,
      image = $24,
      reviews = $25,
      achievements = $26,
      practiceareas = $27,
      education = $28,
      caseswon = $29,
      totalcases = $30,
      availability = $31,
      successrate = $32,
      review_users = $33
    WHERE id = $34
    RETURNING *;
  `;

  const values = [
    auth_id,
    username,
    first_name,
    last_name,
    full_name,
    email,
    phone,
    rating,
    location,
    address,
    pin_code,
    certification,
    qualification,
    experience,
    bar_councle_no,
    bar_asso_name,
    pricing,
    duration,
    bio,
    languages,
    feedback,
    category,
    specilization,
    image,
    reviews,
    achievements,
    practiceareas,
    education,
    caseswon,
    totalcases,
    availability,
    successrate,
    review_users,
    id // condition parameter
  ];

  const result = await pool.query(query, values);
  return result.rows[0] || null; // return updated row or null if not found
};




export const deleteLawyer = async (id: number) => {
  const result = await pool.query("DELETE FROM lawyer_list WHERE id = $1", [id]);
  return (result.rowCount ?? 0) > 0;
};