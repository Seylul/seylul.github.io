MINIMIZED   := $(patsubst %,%.min,$(shell ls -1 | egrep "^[a-z0-9_]+$$"))

all: $(MINIMIZED)

$(MINIMIZED): %.min: %
	yui-compressor --type css $< >$@

clean:
	rm -f $(MINIMIZED)

.PHONY: all clean
