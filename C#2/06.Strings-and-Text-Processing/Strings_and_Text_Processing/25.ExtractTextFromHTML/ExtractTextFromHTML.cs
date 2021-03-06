﻿//Write a program that extracts from given HTML file its title (if available), and its body text without the HTML tags.
using System;
using System.Text.RegularExpressions;

    class ExtractTextFromHTML
    {
        static void Main()
        {
            string html = "<html><head><title>News</title></head><body><p><a href=\"http://academy.telerik.com\">Telerik Academy</a>aims to provide free real-world practical training for young people who want to turn into skillful .NET software engineers.</p></body></html>";
            
            foreach (Match text in Regex.Matches(html, "(?<=>).*?(?=<)"))
            {
                if (!String.IsNullOrWhiteSpace(text.Value)) 
                {
                    Console.WriteLine(text);
                }
            }
        }
    }

