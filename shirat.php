<?php
    class JSON_API_Shirat_Controller{
	public function getRavs($ravname,$posttype, $lessontype){
           	header("Access-Control-Allow-Origin: *");
		
		$rav_name=$ravname;
		$post_type = $posttype
		$lesson_type=$lessontype;

		$myposts =get_posts(array(
    			'post_type' => $post_type,
			'category_name' => $lesson_type,
    			'tax_query' => array(
        			array(
        				'taxonomy' => 'rav',
        				'field' => 'slug',
        				'terms' => $rav_name
				)
    			)
		));
            foreach($myposts as $post) : setup_postdata( $post ); 
                   $lessons[]=$post->ID;
            endforeach;
            return  ( $lessons);
        }
	}

