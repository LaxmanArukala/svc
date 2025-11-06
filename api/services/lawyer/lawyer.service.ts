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
    JSON.stringify(review_users)
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};


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
    JSON.stringify(review_users),
    id // condition parameter
  ];

  const result = await pool.query(query, values);
  
  return result.rows[0] || null; // return updated row or null if not found
};




export const deleteLawyer = async (id: number) => {
  const result = await pool.query("DELETE FROM lawyer_list WHERE id = $1", [id]);
  return (result.rowCount ?? 0) > 0;
};