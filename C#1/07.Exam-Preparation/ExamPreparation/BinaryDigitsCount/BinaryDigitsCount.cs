﻿using System;

    class BinaryDigitsCount
    {
        static void Main()
        {
            byte B = byte.Parse(Console.ReadLine());
            short N = short.Parse(Console.ReadLine());

            for (int i = 1; i <= N; i++)
            {
                int count = 0;
                uint number = uint.Parse(Console.ReadLine());

                while(number != 0)
                {
                    if ((number & 1) == B)
                    {
                        count++;
                    }
                    number = number >> 1;
                }
                Console.WriteLine(count);
            }
        }
    }

