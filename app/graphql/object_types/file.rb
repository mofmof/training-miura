module ObjectTypes
  class File < Types::BaseScalar
    description '画像'

    def self.coerce_input(file, _context)
      ActionDispatch::Http::UploadedFile.new(
        filename: file.original_filename,
        type: file.content_type,
        headers: file.headers,
        tempfile: file.tempfile
      )
    end
  end
end
