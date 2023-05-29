# Substring Commit Message javascript action

This action tries to extract some patterns from the last commit message. It is useful to get use of the extracted values as an input to other steps in the workflow

## Inputs


### `pattern-to-search`

**Required** The regex to use to match the github message

## Outputs

### `match`

The matched string or "null" if no match was found
