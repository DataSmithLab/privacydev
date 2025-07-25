require 'jekyll'

module Jekyll
  class MaterialIconsConverter < Converter
    safe true
    priority :high

    def matches(ext)
      ext =~ /^\.md$/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      # Replace :material-icon-name: with the appropriate include
      content.gsub(/:(material-[a-z0-9\-]+):(\{[^}]+\})?/) do |match|
        icon_name = $1
        classes = $2 || ""
        
        # Extract classes if they exist
        class_attr = ""
        if classes && !classes.empty?
          class_attr = " class=\"#{classes.gsub(/[{}]/, '')}\""
        end
        
        # Generate the icon HTML
        "<i class=\"mdi mdi-#{icon_name.sub('material-', '')}#{class_attr}\"></i>"
      end
    end
  end
end 