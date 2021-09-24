
# count = 0

# while count < 10
#   puts count
#   count += 1
# end
def recursive_count(num = 0)
  return if num > 9
  puts num
  recursive_count(num += 1)
end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
