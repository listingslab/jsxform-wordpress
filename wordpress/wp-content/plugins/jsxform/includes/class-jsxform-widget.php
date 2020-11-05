<?php

class JSXForm_Widget extends WP_Widget {
 
    function __construct() {
        parent::__construct( false, __( 'JSXForm', 'jsxform' ) );
    }
 
    function widget( $args, $instance ) {
        $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'app/build/index.html');
        $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
            '/app/build/static', $html);
        $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
            '/app/build/static', $html);
        echo $html;
    }

    function update( $new_instance, $old_instance ) {
        return $new_instance;
    }
 
    function form( $instance ) {}
}
 
add_action( 'widgets_init', 'jsxform_register_widget' ); 
function jsxform_register_widget() {
    register_widget( 'JSXForm_Widget' );
}
