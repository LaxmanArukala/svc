import pool  from "../../../db";

export const getAllBlogs = async () => {
  const result = await pool.query("SELECT * FROM blog_posts ORDER BY date DESC");
  return result.rows;
};

export const getBlogById= async (id: number)=>{
  const result = await pool.query(`SELECT * FROM blog_posts WHERE id = $1`,[id])
 return result.rows[0];
}

export const createBlog = async(blogData: any)=>{
  
    const { title, description, excerpt, author, category, image } = blogData;
    const result = await pool.query(
    `INSERT INTO blog_posts (title, description, excerpt, author, category, image)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [title, description, excerpt, author, category, image]
  );
  return result.rows[0];

}


export const updatedBlog = async(id:number, blogData: any)=>{
    const { title, description, excerpt, author, category, image } = blogData;
    const result = await pool.query(`UPDATE blog_posts SET title = $1, description = $2, excerpt = $3, author = $4, category = $5, image = $6 WHERE id = $7`,[title, description, excerpt, author, category, image, id])
    return (result.rowCount ?? 0) > 0;
}

export const deleteBlog = async (id: number) => {
  const result = await pool.query("DELETE FROM blog_posts WHERE id = $1", [id]);
  return (result.rowCount ?? 0) > 0;
};