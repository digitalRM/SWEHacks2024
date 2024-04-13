import pdfplumber
import re
import json
import random

def extract_text_from_pdf(pdf_path, start_page, end_page):
    extracted_text = []

    with pdfplumber.open(pdf_path) as pdf:
        for page_number in range(start_page, end_page + 1):
            page = pdf.pages[page_number - 1]
            text = page.extract_text()
            text = remove_page_numbers(text)  # Remove page numbers and other irrelevant text
            text = replace_unicode_characters(text)  # Replace Unicode characters
            extracted_text.append(text)

    return extracted_text


def remove_page_numbers(text):
    # Use regular expressions to remove page numbers and other irrelevant text
    cleaned_text = re.sub(r'\b\d+\b', '', text)  # Remove standalone numbers
    cleaned_text = re.sub(r'Page \d+', '', cleaned_text)  # Remove "Page" followed by a number
    return cleaned_text


def replace_unicode_characters(text):
    # Define a dictionary of Unicode characters and their replacements
    unicode_replacements = {
        "\u201c": '"',  # Left double quotation mark
        "\u201d": '"',  # Right double quotation mark
        "\u2018": "'",  # Left single quotation mark
        "\u2019": "'",  # Right single quotation mark
        "\u2014": "--",
        "\n": " ", # replace to nothing?
        # Add more Unicode characters and their replacements as needed
    }

    # Perform replacements
    for unicode_char, replacement in unicode_replacements.items():
        text = text.replace(unicode_char, replacement)

    return text


def format_as_jsonl(text_list):
    jsonl_entries = []

    for chapter_text in text_list:
        # Split the chapter text into paragraphs
        paragraphs = chapter_text.split(
            "\n\n")  # Split by double newline assuming paragraphs are separated by double newlines

        # Format each paragraph as a JSONL entry
        for paragraph in paragraphs:
            if paragraph.strip():  # Ensure paragraph is not empty
                json_entry = {"note": paragraph.strip()}
                jsonl_entries.append(json.dumps(json_entry))

    return "\n".join(jsonl_entries)


# Specify PDF path and page range
pdf_path = "Book1.pdf"  # Specify the path to your PDF file
start_page = 5  # Specify the starting page number
end_page = 105  # Specify the ending page number

# Extract text from PDF
text_list = extract_text_from_pdf(pdf_path, start_page, end_page)

# Shuffle the text list
random.shuffle(text_list)

# Split the data into training and validation sets (80-20 split)
split_index = int(len(text_list) * 0.8)
train_text = text_list[:split_index]
validation_text = text_list[split_index:]

# Format text as JSONL for training set
train_jsonl_data = format_as_jsonl(train_text)
# Format text as JSONL for validation set
validation_jsonl_data = format_as_jsonl(validation_text)

# Specify the paths where you want to save the JSONL files
train_jsonl_file_path = "notes_train.jsonl"
validation_jsonl_file_path = "notes_validation.jsonl"

# Write JSONL data to files
with open(train_jsonl_file_path, "w") as train_jsonl_file:
    train_jsonl_file.write(train_jsonl_data)

with open(validation_jsonl_file_path, "w") as validation_jsonl_file:
    validation_jsonl_file.write(validation_jsonl_data)
