module Jekyll
   class DetailsTag < Liquid::Block
     def initialize(tag_name, markup, tokens)
       super
       @markup = markup.strip
     end
 
     def render(context)
       content = super
       summary = @markup.empty? ? "Click to expand" : @markup
       
       "<details>\n<summary>#{summary}</summary>\n#{content}\n</details>"
     end
   end
 end
 
 Liquid::Template.register_tag('details', Jekyll::DetailsTag)