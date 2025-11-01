import pool  from "../../../db";


export const getAllCategories = async () => {
  const result = await pool.query(
    `SELECT * FROM category ORDER BY created_at DESC`
  );
  return result.rows;
};

export const getCategoryById= async (id: string)=>{
  const result = await pool.query(`SELECT * FROM category WHERE id = $1`,[id])
 return result.rows[0];
}

export const createCategory = async (categoryData: any) => {
  const { name, description, tags, specializations } = categoryData;

  const result = await pool.query(
    `INSERT INTO category (name, description, tags, specializations)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, description, tags, specializations]
  );

  return result.rows[0];
};



export const updateCategory = async (id: string, categoryData: any) => {

  const { name, description, tags, specializations } = categoryData;
  const result = await pool.query(
    `UPDATE category
     SET 
       name = COALESCE($1, name),
       description = COALESCE($2, description),
       tags = COALESCE($3, tags),
       specializations = COALESCE($4, specializations),
       updated_at = NOW()
     WHERE id = $5
     RETURNING *`,
    [name, description, tags, specializations, id]
  );
 
  return result.rows[0];
};


export const deleteCategory = async (id: string) => {
  const result = await pool.query(
    `DELETE FROM category WHERE id = $1 RETURNING *`,
    [id]
  );

  // If result.rowCount is 0, no record was deleted
 return (result.rowCount ?? 0) > 0;
};
